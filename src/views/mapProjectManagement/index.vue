<template>
  <div>
    <div id="container"></div>
    <custom-popup-components v-show="false" :infoObj="infoFrom" :key="''+new Date()" ref="child"></custom-popup-components>
    <!-- <h1 @click="fun()">关闭</h1> -->
  </div>
</template>

<script>
import customPopupComponents from "./customPopupComponents.vue"; //自定义信息窗口组件
var map,
  district,
  polygons = [],
  citycode,
  infoWindow;
export default {
  name: "mapProjectManagement",
  components: {
    customPopupComponents
  },
  data() {
    return {
      infoFrom: {
        equipmentNum: 0,
        equipmentOfflineNum: 0,
        equipmentOnlineNum: 0,
        projectCode: "",
        projectId: 0,
        projectName: "",
        projectStatus: "",
        workerNum: 0
      }
    };
  },
  create() {},
  mounted() {
    this.$nextTick(() => {
      this.getMapData();
    });
  },
  methods: {
    map() {
      map = new AMap.Map("container", {
        resizeEnable: true,
        center: [109.741193, 38.290162],
        zoom: 10
      });
      var opts = {
        extensions: "all", //参数为all
        level: "district" //区
      };
      let thisPointer = this;
      var district = new AMap.DistrictSearch(opts);
      district.search("榆阳区", function(status, result) {
        if (status == "complete") {
          thisPointer.getData(result.districtList[0]);
        }
      });

      map.setFitView();
    },
    getData(data, level) {
      var bounds = data.boundaries;
      if (bounds) {
        let l = bounds.length;
        for (let i = 0; i < l; i++) {
          var polygon = new AMap.Polygon({
            map: map,
            strokeWeight: 1,
            strokeColor: "#0091ea",
            fillColor: "#80d8ff",
            fillOpacity: 0,
            strokeStyle: "dashed",
            path: bounds[i]
          });
          polygons.push(polygon);
        }
        // map.setFitView();//地图自适应
      }
    },
    getMapData() {
      this.$get("/paymentsupervision/project/projectMap", {})
        .then(res => {
          if (res.status == "200") {
            let datalis = res.data;
            // this
            // console.log(datalis,this,map);
            let arry = [];
            let that = this; //传递参数使用的this，给信息窗口今天传递
            map = new AMap.Map("container", {
              resizeEnable: true,
              center: [109.741193, 38.290162],
              zoom: 10
            });
            datalis.map((m, i) => {
              if (!!m.latitude && !!m.longitude) {
                var list = new AMap.Marker({
                  position: [m.longitude, m.latitude],
                  offset: new AMap.Pixel(16, -45),
                  title: "榆阳区",
                  clickable: true
                });
                AMap.event.addListener(list, "click", function() {
                  that.infoFrom = m;
                  var domTip = that.$refs.child.$el.innerHTML;
                  //鼠标点击marker弹出自定义的信息窗体
                  infoWindow = new AMap.InfoWindow({
                    isCustom: true, //使用自定义窗体
                    content:
                      "<div id='custom_tip_info' class='tip_details'>" +
                      domTip +
                      "</div>",
                    offset: new AMap.Pixel(500, 0)
                    // closeWhenClickMap:true,
                  });
                  // console.log(that.$refs.child.$el,'........*****........');
                  console.log(that.infoFrom, "chaundi", m);
                  infoWindow.open(map, list.getPosition());
                });
                AMap.event.removeListener(list);
                arry.push(list);
              }
            });
            this.$nextTick(() => {
              if (map) {
                map.add(arry);
              } else {
                this.map();
              }
            });
          }
        })
        .then(err => {
          // this.$message.error('网络请求失败');
        })
        .catch({});
    }
  }
};
</script>
<style scoped>
#container {
  width: 100%;
  height: 100vh;
}
</style>
<style>
#custom_tip_info {
  width: 424px;
  border-radius: 6px;
  box-shadow: 0px 7px 12px -2px rgba(0, 0, 0, 0.3);
  padding: 12px;
  background: #fff;
}
#custom_tip_info .tip_close {
  text-align: right;
  padding: 0px;
}
#custom_tip_info .tip_close > span {
  cursor: pointer;
}
</style>
import axios from 'axios';
let serviceFile = {
	/**
	 *下载文件
	 * @param {*链接} url
	 * @param {*文件名称} fileName
	 * @param {*文件后缀} fileSuffix
	 */
	downloadFile(url, fileName, fileSuffix, data, exParam) {
		return this.getFileByAjax(url, data, exParam).then((src) => {
			var link = document.createElement('a');
			link.href = src;
			link.download = `${fileName}.${fileSuffix}`;
			link.click();
			window.URL.revokeObjectURL(src);
		})
	},
	downloadFilePost(url, fileName, fileSuffix, data, exParam) {
		return this.getFileByAjaxPost(url, data, exParam).then((src) => {
			var link = document.createElement('a');
			link.href = src;
			link.download = `${fileName}.${fileSuffix}`;
			link.click();
			window.URL.revokeObjectURL(src);
		})
	},

  /**
   * 字典码
   * @exParam {'code'}
   */
  _getDictCode(dataSrt, method = 'GET',) {
    let param = {
        method,
        async: true,
        url:'/paymentsupervision/dict/all',
        data:{}
    }
    new Promise((resolve, reject) => {
      axios(param).then((res) => {
        let data = res.data;
        // console.log(data,'1231231')
        if (data && data.data) {
            let dictCodeobj = data.data;
            sessionStorage.setItem('dictCodeList', JSON.stringify(dictCodeobj));
            resolve(dictCodeobj);
        } else {
          reject(data);
        }
      }).catch((err) => {
        reject(err);
      });
    });
    let f = JSON.parse(sessionStorage.getItem('dictCodeList'));
    let arrCode=[];
    let list =[];
    for(let key of Object.keys(f)){
        arrCode.push(f[key]);
    }
    arrCode.map((e,i)=>{
      list.push(...e)
    })
    if(dataSrt){
        var str='';
        list.forEach((e,i)=>{
            if(e.dictCode == dataSrt){
              str = e.dictName
            }
        })
        return str;
    }else{
      // console.log(list,arrCode,f)
      // return r;
    }

  },
}
export default serviceFile;

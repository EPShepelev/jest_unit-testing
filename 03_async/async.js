class Ajax {
  static echo(data) {
    return new Promise((resolve, reject) => {
      setTimeout(()=> {
        if(data){
          resolve(data)
        } else {
         reject(new Error('error'))
        }
      }, 300)
    })
  }
}

module.exports = Ajax
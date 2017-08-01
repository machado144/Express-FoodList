function errorMessage(err) {
  let key, string;
  string = JSON.stringify(err);
  if (string.includes('ValidationError')) {
    key = Object.keys(err.errors)[0]
    return err.errors[key].message
  }else{
    return err
  }
}

module.exports = {

  success: (response, status) => {
    return {
      results: {
        status: status,
        data: response
      }
    }
  },

  error: (response, status) => {
    return {
      results: {
        status: status,
        message: errorMessage(response)
      }
    }
  }

}

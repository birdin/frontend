export const getTypeOfInput = (type: boolean) => {
    if(type) {
      return {
        type: 'text',
        className: 'text'
      }
    } else {
        return{
            type: 'password',
            className: 'password'
        }
    }
  }
  
const isLogged = () => !!localStorage.getItem('email');

export {isLogged}
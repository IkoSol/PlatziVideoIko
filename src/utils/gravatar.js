import md5 from 'md5'
//md5 es un algoritmo criptografico utilizado por gravatar para crear un HASH a partir de un correo electronico y
//así gravatar no almacena el correo electronico sino que tiene un hash y lo vincula a una imagen que es tu avatar.
const gravatar = (email) => {
    const base = 'https://gravatar.com/avatar/'
    const formattedEmail = (email).trim().toLowerCase()

    const hash = md5(formattedEmail, { encoding: "binary" })
    console.log(`${base}${hash}`)
    return `${base}${hash}`
}

export default gravatar
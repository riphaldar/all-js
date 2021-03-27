function generatePassword() {
  var length = 16,
    charset =
      '123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_-{}[]|<>?/',
    password = ''
  for (var i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n))
  }
  document.getElementById('password').value = password
}

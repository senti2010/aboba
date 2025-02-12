let tg = window.Telegram.WebApp;
let send_reg = document.querySelector('[name="send_reg"]'),
 buy_item = document.querySelectorAll('[name="buy_item"]'); //
создаем переменную с информацией обо всех кнопках Купить
send_reg.addEventListener('click', () => {
 let user_name =
document.querySelector('[name="user_full_name"]').value,
 user_email =
document.querySelector('[name="user_email"]').value,
 user_tel = document.querySelector('[name="user_tel"]').value;
 let user_data = {
 data_type: 'user_sub',
 data_name: user_name,
 data_email: user_email,
 data_tel: user_tel
 }
 tg.sendData(JSON.stringify(user_data));
 tg.close();
})

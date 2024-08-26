**Для Docker:**

1)Скачайте его,запустите докер десктоп,зарегайтесь на https://hub.docker.com/
2)В терминале(yk-agency-site/backend) введите: docker pull cl9bixdev/yk-image:latest (это вы стягиваете реп который я залил)
3)Дале запустите контейнер(запускаеться на 8000 порту): docker-compose up
4)Сделайте докерфайл для Fronta pzs <3


**URl's для обращенние:**

cases: 

localhost:8000/api/cases/<str:language> - все кейси по языку
localhost:8000/api/cases/<str:language>/<str:slug> - страница отдельного кейса

**reviews:**

localhost:8000/api/reviews/<str:language> - все отзывы по языку


**send-data-form(Залишай заявку + Розрахуй вартість свого замовлення):**

localhost:8000/api/consultation/send-data/{данные} 
Данные которые вы должны отправить ерез метод POST:name,email,phone,answers(тут просто текст с кнопок которые выбрал юзер во время опроса),language

**RESPONSES:**
****'status' : 'error','miss_data','success'****


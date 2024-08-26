from django.core.mail import EmailMessage
from dotenv import load_dotenv
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .config import MAIL_DEFAULT_SENDER
from .models import UsersFormsModel
from .serializer import UserFormSerializer

load_dotenv()


class SendData(APIView):
    def post(self, request, *args, **kwargs):
        serializer = UserFormSerializer(data=request.data)

        if serializer.is_valid():
            name = serializer.validated_data['name']
            email = serializer.validated_data['email']
            phone = serializer.validated_data['phone']
            answers = serializer.validated_data.get('answers', None)
            language = serializer.validated_data.get('language')

            try:
                UsersFormsModel.objects.create(**serializer.validated_data)
                send_email(name=name, email=email, language=language)
                send_emai_to_yuriy(name=name, email=email, phone=phone, language=language)
                return Response({'status': 'success'}, status=status.HTTP_201_CREATED)
            except Exception as e:
                print(f'Send data error: {e}')
                return Response({'status': 'error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        return Response({'status': 'miss_data', 'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


class SendDataCalculation(APIView):
    def post(self, request, *args, **kwargs):
        serializer = UserFormSerializer(data=request.data)

        if serializer.is_valid():
            name = serializer.validated_data['name']
            email = serializer.validated_data['email']
            phone = serializer.validated_data['phone']
            language = serializer.validated_data.get('language')

            try:
                UsersFormsModel.objects.create(**serializer.validated_data)
                send_email(name=name, email=email, language=language)
                send_emai_to_yuriy(name=name, email=email, phone=phone, language=language)
                return Response({'status': 'success'}, status=status.HTTP_201_CREATED)
            except Exception as e:
                print(f'Send data error: {e}')
                return Response({'status': 'error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        return Response({'status': 'miss_data', 'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


def send_email(name, email, language):
    subjects = {
        'ua': '✅Ваша заявка прийнята | Y.K AGENCY❤️',
        'en': '✅Your application is accepted | Y.K AGENCY❤️',
        'hu': '✅Jelentkezését elfogadtuk | Y.K AGENCY❤️'
    }

    messages = {
        'ua': f'''
            {name}, ми хочемо повідомити Вас, що ми успішно отримали Вашу заявку.

            Щоб забезпечити ефективну співпрацю та максимально врахувати ваші потреби, ми зв'яжемось з Вами протягом двох найближчих робочих днів.

            Дякуюємо за довіру, і ми впевнені, що наша спільна робота буде максимально приємною та ефективною.

            З повагою,

            Y.K AGENCY
            ''',
        'en': f'''
            {name}, we would like to inform you that we have successfully received your request.

            To ensure effective cooperation and fully meet your needs, we will contact you within the next two working days.

            Thank you for your trust, and we are confident that our collaboration will be pleasant and effective.

            Best regards,

            Y.K AGENCY
            ''',
        'hu': f'''
            {name}, szeretnénk tájékoztatni Önt, hogy sikeresen megkaptuk a jelentkezését.

            Az eredményes együttműködés és az Ön igényeinek maximális figyelembevételéért két munkanapon belül felvesszük Önnel a kapcsolatot.
            
            Köszönjük bizalmát, és biztosak vagyunk benne, hogy együttműködésünk kellemes és hatékony lesz.
            
            Üdvözlettel,
            
            Y.K AGENCY
            '''
    }

    subject = subjects.get(language, subjects['en'])
    message = messages.get(language, messages['en'])

    from_email = MAIL_DEFAULT_SENDER
    try:
        email = EmailMessage(subject, message, from_email, bcc=[email])
        email.send()
    except Exception as e:
        print(f"Failed to send email: {e}")


def send_emai_to_yuriy(name, email, phone, language):
    subject = 'Заявка з сайту Y.K AGENCY'
    message = f'''
    Ім'я: {name}
    Email: {email}
    Телефон: {phone}
    Мова сайту: {language}
    '''

    from_email = MAIL_DEFAULT_SENDER
    try:
        email = EmailMessage(subject, message, from_email, bcc='yuraklyap1103@gmail.com')
        email.send()
    except Exception as e:
        print(f"Failed to send email: {e}")

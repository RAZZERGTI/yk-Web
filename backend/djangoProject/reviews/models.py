from django.db import models
from django_ckeditor_5.fields import CKEditor5Field


class ChooseLanguage(models.TextChoices):
    ukrainian = 'ua', 'Українська'
    english = 'en', 'English'
    hungarian = 'hu', 'Magyar'




class Review(models.Model):
    user_name = models.TextField(verbose_name="Ім'я замовника")
    company_name = models.TextField(verbose_name="Назва компанії,агенції,корпорації")
    user_emoji = models.ImageField(verbose_name='Емодзі замовника', upload_to='media_storage/reviews_img')
    rating = models.FloatField('Кількість зірок')
    content = CKEditor5Field('Контент', config_name='extends')
    language = models.CharField(choices=ChooseLanguage.choices, default='', verbose_name='Мова сайту', max_length=20)
    def __str__(self):
        return self.company_name

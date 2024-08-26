from django.db import models


# Create your models here.
class UsersFormsModel(models.Model):
    name = models.TextField(verbose_name="Ім'я")
    email = models.EmailField(verbose_name='Email')
    phone = models.CharField(max_length=10, default='', verbose_name='Tel.')
    answers = models.TextField(verbose_name='Відповіді', blank=True, null=True)
    budget = models.TextField(verbose_name='Бюджет', blank=True, null=True)
    language = models.TextField(verbose_name='Мова')

    def __str__(self):
        return self.name

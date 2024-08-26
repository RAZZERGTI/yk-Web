from django.db import models
from django_ckeditor_5.fields import CKEditor5Field


class ChooseLanguage(models.TextChoices):
    ukrainian = 'ua', 'Українська'
    english = 'en', 'English'
    hungarian = 'hu', 'Magyar'

    def __str__(self):
        return self.project_name


class ProjectTypeChoises(models.TextChoices):
    chat_bot = 'chat_bot', 'Телеграм-бот'
    web_site = 'web_site', 'Сайт'
    design = 'design', 'Дизайн'
    mobile_app = 'mobile_app','Мобільний додаток'



class Case(models.Model):
    project_name = models.TextField(verbose_name="Назва проекту/компанії/підприємства")
    project_sphere = models.TextField(verbose_name="Ніша/сфера проекту")
    project_tools = CKEditor5Field(config_name='extends',default='',verbose_name="Інструменти розробки")
    project_tasks =CKEditor5Field(config_name='extends',default='',verbose_name="Завдання")
    project_deadline = models.TextField(verbose_name="Дедлайн ")
    project_developers = CKEditor5Field(config_name='extends',default='',verbose_name="Виконавці проекту")
    project_etaps = CKEditor5Field(config_name='extends',default='',verbose_name="Етапи роботи")
    project_type = models.CharField(max_length=25, choices=ProjectTypeChoises.choices, default='',
                                    verbose_name="Категорія/тип проекту проекту")
    look_for = CKEditor5Field(verbose_name='Переглянути (сайт,чат-бот) + посилання', config_name='extends',default='')
    image = models.ImageField(upload_to='media_storage/case_img')
    video = models.FileField(upload_to='media_storage/case_video', blank=True, null=True)
    language = models.TextField(choices=ChooseLanguage.choices, default='')
    slug = models.SlugField(unique=True, default='', verbose_name="Slug сторінки", blank=True, editable=True)

    def __str__(self):
        return self.project_name


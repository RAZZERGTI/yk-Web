from django.db import models


class ChooseLanguage(models.TextChoices):
    ukrainian = 'uk', 'Українська'
    english = 'en', 'English'


class New(models.Model):
    title = models.CharField(max_length=50)
    short_description = models.TextField()
    content = models.TextField()
    image = models.ImageField(upload_to='media_storage/news_img')
    created_at = models.DateTimeField(auto_now_add=True)
    language = models.TextField(choices=ChooseLanguage.choices, default=ChooseLanguage.ukrainian)


    def __str__(self):
        return self.title

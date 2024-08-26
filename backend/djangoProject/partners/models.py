from django.db import models


class Partner(models.Model):
    name = models.CharField(max_length=30)
    description = models.TextField()
    image = models.ImageField(upload_to='media_storage/partners_img/')

    def __str__(self):
        return self.name

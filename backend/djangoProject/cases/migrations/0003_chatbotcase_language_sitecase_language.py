# Generated by Django 5.0.3 on 2024-04-18 10:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cases', '0002_sitecase_alter_chatbotcase_video'),
    ]

    operations = [
        migrations.AddField(
            model_name='chatbotcase',
            name='language',
            field=models.TextField(choices=[('uk', 'Українська'), ('en', 'English')], default='uk'),
        ),
        migrations.AddField(
            model_name='sitecase',
            name='language',
            field=models.TextField(choices=[('uk', 'Українська'), ('en', 'English')], default='uk'),
        ),
    ]

from django.db import models
from django.utils import timezone


class Offer(models.Model):
    name = models.CharField(max_length=75)
    views = models.IntegerField(default=0)
    transition = models.IntegerField(default=0)
    conversion = models.IntegerField(default=0)
    date_time = models.DateTimeField(default=timezone.now)
    closing_link = models.CharField(max_length=75)

   
class Prealand(models.Model):
    offer = models.ForeignKey(Offer, on_delete=models.CASCADE)
    name = models.CharField(max_length=75)
    link = models.CharField(max_length=75)
    date_time = models.DateTimeField(default=timezone.now)
    uniqueness = models.IntegerField(default=0)
    views = models.IntegerField(default=0)
    transition = models.IntegerField(default=0)
    conversion = models.IntegerField(default=0)

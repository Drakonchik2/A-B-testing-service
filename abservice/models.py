from django.db import models
from django.utils import timezone


class Offer(models.Model):
    name = models.CharField(max_length=75)
    views = models.IntegerField(default=0)
    transition = models.IntegerField(default=0)
    conversion = models.IntegerField(default=0)
    date_time = models.DateTimeField(auto_now_add=True)
    closing_link = models.CharField(max_length=75)
    
    def __str__(self):
        return self.name
    
   
class Prealand(models.Model):
    offer = models.ForeignKey(Offer, on_delete=models.CASCADE)
    name = models.CharField(max_length=75)
    link = models.CharField(max_length=75)
    date_time = models.DateTimeField(auto_now_add=True)
    uniqueness = models.IntegerField(default=0)
    views = models.IntegerField(default=0)
    transition = models.IntegerField(default=0)
    conversion = models.IntegerField(default=0)

    def __str__(self):
        return self.name
    
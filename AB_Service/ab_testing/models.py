from djongo import models



class Offer(models.Model):
    name = models.CharField(max_length=50)
    views = models.IntegerField(default=0)
    transition = models.IntegerField(default=0)
    conversion = models.IntegerField(default=0)
    closing_link = models.TextField(max_length=75)
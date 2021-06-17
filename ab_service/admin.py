from django.contrib import admin

# Register your models here.
from .models import Offer, Prealand


class PrealandAdmin(admin.ModelAdmin):
    list_display = ('name', 'link', 'date_time')
    list_filter = ('date_time',)
    fields = ['offer', 'name', 'link', 'date_time']
    search_fields = ['name']


class PrealandInline(admin.TabularInline):
    model = Prealand


class OfferAdmin(admin.ModelAdmin):
    list_display = ('name', 'date_time')
    list_filter = ('date_time',)
    fields = ['name', 'date_time', 'closing_link']
    search_fields = ['name']
    inlines = [PrealandInline]


admin.site.register(Offer, OfferAdmin)
admin.site.register(Prealand, PrealandAdmin)
from django.contrib import admin

# Register your models here.
from .models import Offer, Prealand


class PrealandAdmin(admin.ModelAdmin):
    list_display = ('name', 'link', 'date_time')
    list_filter = ('date_time',)
    fields = ['offer', 'name', 'link', 'date_time', 'uniqueness', 'views', 'transition', 'conversion']
    search_fields = ['name']
    readonly_fields = ['date_time', 'uniqueness', 'views', 'transition', 'conversion']

class PrealandInline(admin.TabularInline):
    model = Prealand
    readonly_fields = ['date_time', 'uniqueness', 'views', 'transition', 'conversion']

class OfferAdmin(admin.ModelAdmin):
    list_display = ('name', 'date_time')
    list_filter = ('date_time',)
    fields = ['name','date_time', 'closing_link', 'views', 'transition', 'conversion']
    search_fields = ['name']
    readonly_fields = ['date_time', 'views', 'transition', 'conversion']
    inlines = [PrealandInline]
    


admin.site.register(Offer, OfferAdmin)
admin.site.register(Prealand, PrealandAdmin)
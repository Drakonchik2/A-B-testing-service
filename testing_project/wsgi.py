import os

from django.core.wsgi import get_wsgi_application
#from whitenoise.django import DjangoWhiteNoise
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'testing_project.settings')
django.setup()

application = get_wsgi_application()
#application = DjangoWhiteNoise(application)
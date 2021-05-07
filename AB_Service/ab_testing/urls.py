from django.conf.urls import url
from ab_testing import views

urlpatterns = [
    url(r'^api/ab_testing$', views.offers_list),
    url(r'^api/ab_testing/(?P<pk>[0-9]+)$', views.offer_detail),
    #url(r'^api/ab_testing/published$', views.tutorial_list_published)
]
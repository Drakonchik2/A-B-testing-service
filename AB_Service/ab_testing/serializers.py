from rest_framework import serializers
from ab_testing.models import Offer


class OfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offer
        fields = ('id',
                  'name',
                  'views',
                  'transition',
                  'conversion',
                  'closing_link',
                  )
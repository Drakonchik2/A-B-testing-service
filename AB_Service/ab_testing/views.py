from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status

from ab_testing.models import Offer
from ab_testing.serializers import OfferSerializer
from rest_framework.decorators import api_view


@api_view(['GET', 'POST', 'DELETE'])
def offers_list(request):
    if request.method == 'GET':
        offers = Offer.objects.all()

        name = request.GET.get('name', None)
        if name is not None:
            offers = offers.filter(name__icontains=name)

        offers_serializer = OfferSerializer(offers, many=True)
        return JsonResponse(offers_serializer.data, safe=False)
    elif request.method == 'POST':
        offer_data = JSONParser().parse(request)
        offer_serializer = OfferSerializer(data=offer_data)
        if offer_serializer.is_valid():
            offer_serializer.save()
            return JsonResponse(offer_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(offer_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        count = Offer.objects.all().delete()
        return JsonResponse({'message': '{} Offers were deleted successfully!'.format(count[0])},
                            status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'PUT', 'DELETE'])
def offer_detail(request, pk):
    offer = Offer.objects.get(pk=pk)
    if request.method == 'GET':
        offer_serializer = OfferSerializer(offer)
        return JsonResponse(offer_serializer.data)
    elif request.method == 'PUT':
        offer_data = JSONParser().parse(request)
        offer_serializer = OfferSerializer(offer, data=offer_data)
        if offer_serializer.is_valid():
            offer_serializer.save()
            return JsonResponse(offer_serializer.data)
        return JsonResponse(offer_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        offer.delete()
        return JsonResponse({'message': 'Offer was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)
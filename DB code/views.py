from models import Preland, Offer
from mongoengine.queryset.visitor import Q

count = 0

def add_preland(name, link, uniqueness, back_link):
    preland = Preland()
    preland.name = name
    preland.link = link
    preland.uniqueness = uniqueness
    preland.back_link = back_link
    offer.preland.append(preland)


def add_offer(name, closing_link, traffic):
    offer.name = name
    offer.closing_link = closing_link
    offer.traffic = traffic
    offer.save()


def add_to_preland(update_offer):
    preland = Preland()
    preland.name = input("Name of preland: ")
    preland.link = input("Link of preland: ")
    preland.uniqueness = int(input("Uniqueness of preland: "))
    preland.back_link = input("Back link of preland: ")
    Offer.objects(name = update_offer).update(push__preland = preland)


def update_preland(operation, upd_offer, upd_preland):
    if operation == 4:
        new = input("Enter new name: ")
        Offer.objects(Q(name = upd_offer) and Q(preland__name = upd_preland)).update(set__preland__name = new)
    elif operation == 5:
        new = input("Enter new link: ")
        Offer.objects(name = upd_offer).update(set__upd_preland__link = new)
    elif operation == 6:
        new = int(input("Enter new uniqueness value: "))
        Offer.objects(name = upd_offer).update(set__upd_preland__name = new)
    elif operation == 7:
        new = input("Enter new back link: ")
        Offer.objects(name = upd_offer).update(set__upd_preland__back_link = new)


def update_offer(operation, upd_object):
    if operation == 1:
        new = input("Enter new name: ")
        Offer.objects(name = upd_object).update(set__name = new)
    elif operation == 2:
        pass
    elif operation == 3:
        new = input("Enter new link: ")
        Offer.objects(name = upd_object).update(set__link = new)


def show_offer():
    for i in Offer.objects:
        print(i.name)
        print(i.timestamp)
        print(i.views)
        print(i.transition)
        print(i.conversion)
        print(i.preland)
        print(i.traffic)
        print(i.closing_link)


def delete_offer(offer_to_delete):
    delete_offers = Offer.objects(name = offer_to_delete)
    delete_offers.delete()


def delete_preland(offer_to_delete, preland_to_delete):
    Offer.objects(name = offer_to_delete).update(pull__preland__name = preland_to_delete)


offer = Offer()

print("Welcome to our database")
print("To interact with it, please, choose one of following commands")
print("C - create new offer")
print("R - show all offers in database")
print("U - update existing offer")
print("D - delete existing element in database")
choice = input("What command do you want to perform?: ")

if choice == "C":
    while True:
        while True:
            preland_name = input("Name of preland: ")
            preland_link = input("Link of preland: ")
            preland_uniqueness = input("Uniqueness of preland: ")
            preland_back_link = input("Back link of preland: ")
            add_preland(preland_name, preland_link, preland_uniqueness, preland_back_link)
            choice = input("Do you want to add another one? [Y/N]: ")
            if choice == "Y":
                count += 1
                continue
            else:
                break
        offer_name = input("Name of offer: ")
        offer_closing_link =input("Closing link of offer: ")
        offer_traffic = []
        choice = input("Do you want to change traffic ratios? [Y/N]: ")
        if choice == "Y":
            for i in range(offer.preland.count()):
                traffic_change = float(input("Enter new ratio: "))
                offer_traffic.append(traffic_change)
        elif choice == "N":
                for i in range(count):
                    offer_traffic.append(float(1/count))

        add_offer(offer_name, offer_closing_link, offer_traffic)
        choice = input("Do you want to add another one? [Y/N]: ")
        if choice == "Y":
            continue
        else:
            break

if choice == "R":
    show_offer()

if choice == "U":
    print("What type of update you want to do?")
    print("Add or delete preland to existing offer [1]")
    print("Change fields of existing offers and prelands [2]")
    while True:
        choice = input("Enter what you want to do?: ")
        if choice == "1":
            while True:
                choice = input("Do you want to add[1] or delete[2] preland?: ")
                if choice == "1":
                    choice = input("Enter the name of offer you want to add new preland to: ")
                    add_to_preland(choice)
                    break
                elif choice == "2":
                    offer_choice = input("Enter the name of the offer where preland located: ")
                    choice = input("Enter the name of the preland you want to delete: ")
                    delete_preland(offer_choice, choice)
                    break
                else:
                    print("Try again")
        elif choice == "2":
            print("What do you want to update?: ")
            print("[1]: Offer")
            print("[2]: Preland")
            object_choice = input("Your choice: ")
            if object_choice == "1":
                object_choice = input("Enter the name of the offer: ")
            elif object_choice == "2":
                offer_choice = input("Enter the name of the offer: ")
                preland_choice = input("Enter the name of the preland: ")

            print("What parameters do you want to change?: ")
            print("[1]: Offer name")
            print("[2]: Traffic")
            print("[3]: Closing link")
            print("[4]: Preland name")  
            print("[5]: Preland link")
            print("[6]: Uniqueness")
            print("[7]: Back link")
            operation_choice = int(input("Chose one option: "))
            if operation_choice == 1 or operation_choice == 2 or operation_choice == 3:
                update_offer(operation_choice, object_choice)
                break
            else:
                update_preland(operation_choice, offer_choice, preland_choice)
                break
        else:
            print("Try again")


if choice == "D":
    choice = input("Do you want to delete offer[1] or preland[2]?: ")
    if choice == "1":
        choice = input("Enter the name of the offer you want to delete: ")
        delete_offer(choice)
    elif choice == "2":
        offer_choice = input("Enter the name of the offer where preland located: ")
        choice = input("Enter the name of the preland you want to delete: ")
        delete_preland(offer_choice, choice)
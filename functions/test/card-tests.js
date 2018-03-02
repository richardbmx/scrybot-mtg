var assert = require('assert');
var Card = require('../card2.js');

//#region test data
    var chandraData = {
        "object": "card",
        "id": "49fdd0d3-7140-4c12-a41c-37eedd986d9e",
        "oracle_id": "0c2a9131-f3d7-4f71-8bcc-3c169574b2e3",
        "multiverse_ids": [
            407614
        ],
        "mtgo_id": 59361,
        "mtgo_foil_id": 59362,
        "name": "Chandra, Flamecaller",
        "uri": "https://api.scryfall.com/cards/ogw/104",
        "scryfall_uri": "https://scryfall.com/card/ogw/104?utm_source=api",
        "layout": "normal",
        "highres_image": true,
        "image_uris": {
            "small": "https://img.scryfall.com/cards/small/en/ogw/104.jpg?1517813031",
            "normal": "https://img.scryfall.com/cards/normal/en/ogw/104.jpg?1517813031",
            "large": "https://img.scryfall.com/cards/large/en/ogw/104.jpg?1517813031",
            "png": "https://img.scryfall.com/cards/png/en/ogw/104.png?1517813031",
            "art_crop": "https://img.scryfall.com/cards/art_crop/en/ogw/104.jpg?1517813031",
            "border_crop": "https://img.scryfall.com/cards/border_crop/en/ogw/104.jpg?1517813031"
        },
        "cmc": 6,
        "type_line": "Legendary Planeswalker — Chandra",
        "oracle_text": "+1: Create two 3/1 red Elemental creature tokens with haste. Exile them at the beginning of the next end step.\n0: Discard all the cards in your hand, then draw that many cards plus one.\n−X: Chandra, Flamecaller deals X damage to each creature.",
        "mana_cost": "{4}{R}{R}",
        "loyalty": "4",
        "colors": [
            "R"
        ],
        "color_identity": [
            "R"
        ],
        "legalities": {
            "standard": "not_legal",
            "frontier": "legal",
            "modern": "legal",
            "pauper": "not_legal",
            "legacy": "legal",
            "penny": "not_legal",
            "vintage": "legal",
            "duel": "legal",
            "commander": "legal",
            "1v1": "legal",
            "future": "not_legal"
        },
        "reserved": false,
        "reprint": false,
        "set": "ogw",
        "set_name": "Oath of the Gatewatch",
        "set_uri": "https://api.scryfall.com/sets/ogw",
        "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Aogw&unique=prints",
        "scryfall_set_uri": "https://scryfall.com/sets/ogw?utm_source=api",
        "rulings_uri": "https://api.scryfall.com/cards/ogw/104/rulings",
        "prints_search_uri": "https://api.scryfall.com/cards/search?order=set&q=%21%E2%80%9CChandra%2C+Flamecaller%E2%80%9D&unique=prints",
        "collector_number": "104",
        "digital": false,
        "rarity": "mythic",
        "illustration_id": "cfa43dc0-2fab-48ec-890c-448b9bf3ada7",
        "artist": "Jason Rainville",
        "frame": "2015",
        "full_art": false,
        "border_color": "black",
        "timeshifted": false,
        "colorshifted": false,
        "futureshifted": false,
        "edhrec_rank": 1122,
        "usd": "1.97",
        "tix": "0.56",
        "eur": "2.74",
        "related_uris": {
            "gatherer": "http://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=407614",
            "tcgplayer_decks": "http://decks.tcgplayer.com/magic/deck/search?contains=Chandra%2C+Flamecaller&page=1&partner=Scryfall",
            "edhrec": "http://edhrec.com/route/?cc=Chandra%2C+Flamecaller",
            "mtgtop8": "http://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Chandra%2C+Flamecaller"
        },
        "purchase_uris": {
            "amazon": "https://www.amazon.com/gp/search?ie=UTF8&index=toys-and-games&keywords=Chandra%2C+Flamecaller&tag=scryfall-20",
            "ebay": "http://rover.ebay.com/rover/1/711-53200-19255-0/1?campid=5337966903&icep_catId=19107&icep_ff3=10&icep_sortBy=12&icep_uq=Chandra%2C+Flamecaller&icep_vectorid=229466&ipn=psmain&kw=lg&kwid=902099&mtid=824&pub=5575230669&toolid=10001",
            "tcgplayer": "http://store.tcgplayer.com/magic/oath-of-the-gatewatch/chandra-flamecaller?partner=Scryfall",
            "magiccardmarket": "https://www.cardmarket.com/Magic/Products/Singles/Oath+of+the+Gatewatch/Chandra%2C+Flamecaller?referrer=scryfall",
            "cardhoarder": "https://www.cardhoarder.com/cards/59361?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall",
            "card_kingdom": "https://www.cardkingdom.com/catalog/item/204587?partner=scryfall&utm_campaign=affiliate&utm_medium=scryfall&utm_source=scryfall",
            "mtgo_traders": "https://www.mtgotraders.com/deck/ref.php?id=59361&referral=scryfall",
            "coolstuffinc": "https://www.coolstuffinc.com/p/Magic%3A+The+Gathering/Chandra%2C+Flamecaller?utm_source=scryfall"
        }
    };
//#endregion

describe('singleCard', () => {
    describe('chandra', () => {
        var chandra = new Card(chandraData);
        it('should have correct name', () => {
            assert.equal(chandra.getName(), "Chandra, Flamecaller");
        });
        it('should have correct set and rarity', () => {
            assert.equal(chandra.getSetAndRarity(), "Oath of the Gatewatch <mythic>");
        });
        it('should have correct mana cost and type', () => {
            assert.equal(chandra.getManaCostAndType(), "{4}{R}{R}  Legendary Planeswalker — Chandra");
        });
        it('should have correct body text', () => {
            assert.equal(chandra.getBodyText(),"+1: Create two 3/1 red Elemental creature tokens with haste. Exile them at the beginning of the next end step.\n  \n0: Discard all the cards in your hand, then draw that many cards plus one.\n  \n−X: Chandra, Flamecaller deals X damage to each creature.");
        });
        it('should have correct prices', () => {
            assert.equal(chandra.getPrices(), "USD: 1.97 / EUR: 2.74");
        });
        it('should have correct image', () => {
            assert.equal(chandra.getImage("large"), "https://img.scryfall.com/cards/large/en/ogw/104.jpg?1517813031");
        });
    });
});
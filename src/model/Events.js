import EventModel from "./EventModel";
import Consequences from "./Consequences";

const Events = [
    new EventModel(
        "Neues Foto",
        `Es ist Zeit für ein neues Foto auf deinem Social-Media-Kanal. Wie möchtest du dich darstellen? `,
        " Welches Foto von dir willst du posten?",
        "Ein kreativ inszeniertes Foto aus deinem letzten Urlaub.",
        "Ein Schnappschuss, auf dem du dich mit ein paar Pickelchen darstellst.",
        new Consequences("Du bekommst viele Likes und eine Marke will mit dir Werbung machen.",
            0,
            +3,
            +2,
            0
            ),
        new Consequences(
            "Die meisten deiner Fans mochten dein Foto. Du bekommst auch Zuspruch von neuen Followern.",
            +2,
            +3,
            0,
            0
        )),
    new EventModel(
        "Video mit Social-Media-Star",
        "Ein bekannter Social-Media-Star will ein Video mit dir drehen. Du magst die Person eigentlich gar nicht.",
        "Was machst du?",
        "Das Video drehen, das gibt viel Aufmerksamkeit!",
        "Das Video absagen, darauf habe ich keine Lust.",
        new Consequences("Das Video erhält viele Aufrufe, deine Fans finden deinen Auftritt aber komisch. Außerdem war der Dreh echt zeitaufwändig.",
            +3,
            -1,
            0,
            -1
            ),
        new Consequences(
            "Der Social-Media-Star findet deine Absage blöd und lässt das öffentlich durchblicken.",
            0,
            -2,
            0,
            +3
        )),
    new EventModel(
        "Produktwerbung",
        "Du bekommst zwei Anfragen von Unternehmen, die möchten, dass du Werbung für ihr Produkt auf deinen Social-Media-Angeboten machst. Du entscheidest dich dafür, mal wieder ein Werbeangebot anzunehmen.",
        "Welches nimmst du?",
        "Werbung für ein Produkt, von dem du bisher nichts Gutes gehört hast, aber dafür sehr viel Geld verdienst.",
        "Werbung für ein Produkt, dass du super findest, aber wenig Geld dafür bekommst.",
        new Consequences("Deine Fans folgen deiner Empfehlung, kaufen das Produkt und sind enttäuscht. ",
            0,
            -2,
            +3,
            0
            ),
        new Consequences(
            "Deine Fans mögen das Produkt genauso gern wie du.",
            0,
            +3,
            +2,
            0
        )),
]

export default Events
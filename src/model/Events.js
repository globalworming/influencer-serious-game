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
]

export default Events
class Consequences {
    deltaNotoriety
    deltaMoney;
    deltaPrivateLife;
    description;
    deltaPopularity


    constructor(description, deltaNotoriety, deltaPopularity, deltaMoney, deltaPrivateLife) {
        this.description = description;
        this.deltaMoney = deltaMoney;
        this.deltaPrivateLife = deltaPrivateLife;
        this.deltaNotoriety = deltaNotoriety;
        this.deltaPopularity = deltaPopularity;
    }

    apply(context) {
        const {
            notorietyState: [noto, setNoto],
            popularityState: [pop, setPop],
            moneyState: [money, setMoney],
            privateLifeState: [life, setLife],
        } = context;
        setNoto(noto + this.deltaNotoriety)
        setPop(pop + this.deltaPopularity)
        setMoney(money + this.deltaMoney)
        setLife(life + this.deltaPrivateLife)
    }
}

export default Consequences
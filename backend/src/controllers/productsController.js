module.exports = {
    async index (req, res) {
        res.json(['product1 in promotion','product2 in promotion'])
    },

    async store (req,res) {
        res.json({message: 'stored product in promotion'})
    },

    async update (req, res) {
        res.json({message: 'updated product in promotion'})
    },

    async destroy (req, res) {
        res.json({message: 'delete product in promotion'})
    },

    async show (req, res) {
        res.json({message: 'show product in promotion'})
    },
}
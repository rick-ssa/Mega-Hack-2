module.exports = {
    async index (req, res) {
        res.json(['categoria1 in promotion','categoria2 in promotion'])
    },

    async store (req,res) {
        res.json({message: 'stored categoria in promotion'})
    },

    async update (req, res) {
        res.json({message: 'updated categoria in promotion'})
    },

    async destroy (req, res) {
        res.json({message: 'delete categoria in promotion'})
    },

    async show (req, res) {
        res.json({message: 'show categoria in promotion'})
    },
}
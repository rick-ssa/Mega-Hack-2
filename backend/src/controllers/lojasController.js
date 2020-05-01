module.exports = {
    async index (req, res) {
        res.json(['loja1','loja2'])
    },

    async store (req,res) {
        res.json({message: 'stored loja'})
    },

    async update (req, res) {
        res.json({message: 'updated loja'})
    },

    async destroy (req, res) {
        res.json({message: 'delete loja'})
    },

    async show (req, res) {
        res.json({message: 'show loja'})
    },
}
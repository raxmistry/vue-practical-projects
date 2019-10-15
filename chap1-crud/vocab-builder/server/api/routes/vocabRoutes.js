var vocabBuilder = require('../controllers/vocabController');

module.exports = app => {
    app
        .route('/')
        .get(function (req, res) {res.send("Hello there");
        });

    app
        .route('/words')
        .get(vocabBuilder.list_all_words)
        .post(vocabBuilder.create_a_word);

    app
        .route('/words/:wordId')
        .get(vocabBuilder.read_a_word)
        .post(vocabBuilder.update_a_word)
        .delete(vocabBuilder.delete_a_word);

};

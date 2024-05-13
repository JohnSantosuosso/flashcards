"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var card_1 = require("./card");
var CardGenerator = /** @class */ (function () {
    function CardGenerator() {
        this.cards = this.generateCardsFromFile('questions.txt');
    }
    CardGenerator.prototype.generateCardsFromFile = function (filePath) {
        var _a;
        var fileContent = fs.readFileSync(filePath, 'utf-8');
        var lines = fileContent.split('\n');
        var cards = [];
        for (var i = 0; i < lines.length; i += 2) {
            var question = lines[i].trim();
            var answer = ((_a = lines[i + 1]) === null || _a === void 0 ? void 0 : _a.trim()) || '';
            if (question !== '') {
                var card = new card_1.default(question, answer);
                cards.push(card);
            }
        }
        return cards;
    };
    return CardGenerator;
}());
exports.default = CardGenerator;

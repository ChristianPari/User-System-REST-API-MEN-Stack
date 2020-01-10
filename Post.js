const mongoose = require('mongoose'),

      postSchema = mongoose.Schema({
          title: {
                type: String,
                required: true
          },
          description: {
            type: String,
            required: true
          },
          date: {
              type: Date,
              default: Date.now()
          }

      });

module.exports = mongoose.model('Post', postSchema);
import { Schema, model } from 'mongoose'

// calendarGraph.years[2020].month[0][31].challenge2.description

const calendarGraphSchema = new Schema({
  years: [
    {
      months: [
        {
          days: [
            {
              challenges: [
                {
                  ref: 'Challenge',
                  type: Schema.Types.ObjectId,
                },
              ]
            }
          ]
        }
      ]
    }
  ],

  challenges: [
    {
      challenge: {
        ref: 'Challenge',
        type: Schema.Types.ObjectId,
      },

      progress: {
        type: Object,
        require: true
      }
    }
  ],

  user: {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      require: true
    }
  },

  date: {
    type: Date,
    default: Date.now
  }

  // data: {
	// 	birthday: {
	// 		type: Date,
	// 		default: Date.now
	// 	},
	// 	status: {
	// 		type: String,
	// 		default: 'active',
	// 		enum: ['active', 'unactive']
	// 	},
	// 	mix: {
	// 		type: mongoose.Schema.Types.Mixed,
	// 		default: {}
	// 	}
  // },


  // text: {
  //   type: String,
  //   required: true
  // },
  // date: {
  //   type: Date,
  //   default: Date.now
  // },
  // postId: {
  //   ref: 'Post',
  //   type: Schema.Types.ObjectId,
  // }
})

module.exports = model('calendargraphs', calendarGraphSchema)

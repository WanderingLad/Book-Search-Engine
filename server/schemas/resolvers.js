const { User } = require('../models');

const resolvers = {
    Query: {
        singleUser: async (parent, { username }) => {
            return User.findOne({ username })
        },
    },

    Mutation: {
        createUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });

            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if(!user) {
                throw new AuthenticationError('No User Found');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        },
        saveBook: async (parent, { username, bookID }, context) => {
            return User.findOneAndUpdate(
                { _id: context.user_id },
                { $addToSet: {savedBooks: {bookId: bookID } } },
                { new: true, runValidators: true }
            );
            
        },
        deleteBook: async(parent, { bookId }, context) => {
            return User.findOneAndUpdate(
                { _id: context.user_id},
                { $pull: { savedBooks: { bookId: bookId } } },
                { new: true }
            )
        }
    }
};

module.exports = resolvers;
// no-incomplete-todo-comments.

// eslint-disable-next-line no-undef
module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Disallow todo comments.",
      category: "Best Practices",
      recommended: true,
    },
    fixable: "code",
    schema: [], // no options
    messages: {
      incompleteTodo:
        "Incomplete todo - Please complete it and remove or modify the comment.",
    },
  },
  create: function (context) {
    const sourceCode = context.getSourceCode();
    return {
      // callback functions.
      Program() {
        const comments = sourceCode.getAllComments();
        comments.forEach((comment) => {
          const value = comment.value.trim();
          // Warn if comment starts with TODO (case-insensitive)
          if (/^todo[:]?/i.test(value)) {
            context.report({
              loc: comment.loc,
              messageId: "incompleteTodo",
              data: {
                fileName: context.filename,
                lineNumber: comment.loc.start.line,
              },
            });
          }
        });
      },
    };
  },
};

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "header-max-length": [2, "always", 66], // github commit without being trucated
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "hotfix",
        "release",
        "docs",
        "style",
        "refactor",
        "perf",
        "test",
        "chore",
        "revert",
        "ci",
        "upgrade",
        "enhance",
      ],
    ],
  },
};

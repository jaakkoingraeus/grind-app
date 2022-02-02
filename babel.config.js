module.exports = function (api) {
    api.cache(true);
    const plugins = [["module:react-native-dotenv"]];
    const presets = [["babel-preset-expo"]];

    return {
        presets,
        plugins,
    };
};

import parseFiles from "../src/parseFiles";

test("Get all scenes finds enough elements.", () => {
    let allScenes = parseFiles.getAllScenes("./tests/samples/sample-1");
    expect((allScenes.length) === 3)
})

test("Recordings checker on a recording.", () => {
    let isRecording = parseFiles.checkIfRecording("./tests/samples/samples-1/scene_1/asciicasts/commands_1.cast")
    expect(isRecording)
})

test("Recordings checker on a txt file.", () => {
    let isRecording = parseFiles.checkIfRecording("./tests/samples/sample-1/scene_1/read/read_1.txt")
    expect(!isRecording)
})
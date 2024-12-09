global.window = {} // mock an empty window object
global.document = { // mock document if necessary
  getElementById: jest.fn().mockReturnValue({}),
  querySelector: jest.fn().mockReturnValue({}),
};
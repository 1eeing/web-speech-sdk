// import SpeechRecognitionTool from '../src'

// describe('SpeechRecognitionTool', () => {
//   let recognizer

//   beforeEach(() => {
//     recognizer = new SpeechRecognitionTool()
//   })

//   afterEach(() => {
//     recognizer.end()
//   })

//   test('should recognize speech', (done) => {
//     recognizer.start()

//     setTimeout(() => {
//       expect(recognizer.transcript).not.toBe('')
//       done()
//     }, 5000)
//   })

//   test('should speak', (done) => {
//     recognizer.speak('hello', () => {
//       done()
//     })
//   })
// })
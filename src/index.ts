// @ts-nocheck
class SpeechRecognitionTool {
  public transcript = ''

    constructor(lang = 'zh-CN') {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      this.recognition = new SpeechRecognition()
      this.recognition.lang = lang
      this.recognition.interimResults = true
      this.recognition.maxAlternatives = 1
      this.transcript = ''
      this.isStarted = false
    }
  
    public start(): void {
      if (!this.isStarted) {
        this.isStarted = true
        this.recognition.start()
        this.recognition.addEventListener('result', this._handleResult)
      }
    }
  
    public end(): void {
      if (this.isStarted) {
        this.isStarted = false
        this.recognition.removeEventListener('result', this._handleResult)
        this.recognition.stop()
      }
    }
  
    public speak(text: string, cb?: (params: any) => any): void {
      const synth = window.speechSynthesis
      const utterance = new SpeechSynthesisUtterance(text)
  
      utterance.onend = () => {
        // 在这里执行您需要的代码
        cb?.()
      }
  
      synth.speak(utterance)
    }
  
    private _handleResult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join('')
  
      this.transcript = transcript
    }
  }
  
  export default SpeechRecognitionTool
  
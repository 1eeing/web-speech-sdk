# web-speech-sdk

一个简单的 TypeScript 类，用于语音识别和语音合成。

该库的`代码`、`文档`、`单测`、`description`、`初始化项目脚本` 等均由 `chatGPT` 辅助生成。


## 安装

可以通过 npm 安装：

```sh
$ npm install web-speech-sdk
```

## 用法

```js
import SpeechRecognitionTool from 'web-speech-sdk'

const recognizer = new SpeechRecognitionTool()

recognizer.start()

// 播放语音
recognizer.speak('你好，世界！', () => {
  console.log('语音播放完毕')
})
```

## API

### SpeechRecognitionTool

SpeechRecognitionTool 类，用于语音识别和语音合成。


#### constructor(lang: string = 'zh-CN')

创建一个 SpeechRecognitionTool 实例。


**参数**


- lang - 可选，语言代码，默认为 'zh-CN'。


**start(): void**

开始进行语音识别。


**end(): void**

结束语音识别。


**speak(text: string, cb?: () => void): void**

播放语音。


参数


- text - 要播放的文本。

- cb - 可选，播放结束时的回调函数。


## 示例


以下是一个基于 SpeechRecognitionTool 类的简单示例，用于演示如何使用该类进行语音识别和语音合成：

```html
<!DOCTYPE html>
<html>
  <head>
    <title>SpeechRecognitionTool 示例</title>
  </head>
  <body>
    <div>
      <button id="start-button">开始</button>
      <button id="stop-button">停止</button>
      <button id="speak-button">播放语音</button>
    </div>
    <script type="module">
      import SpeechRecognitionTool from '../lib/index.js'
      const recognizer = new SpeechRecognitionTool()

     const startButton = document.querySelector('#start-button')
      startButton.addEventListener('click', () => {
        recognizer.start()
      })

      const stopButton = document.querySelector('#stop-button')
      stopButton.addEventListener('click', () => {
        recognizer.end()
        console.log('识别结果：', recognizer.transcript)
      })

      const speakButton = document.querySelector('#speak-button')
      speakButton.addEventListener('click', () => {
        recognizer.speak('你好，世界！', () => {
          console.log('语音播放完毕')
        })
      })
    </script>
  </body>
</html>
```

在这个示例中，我们创建了一个包含三个按钮的简单页面，用户可以通过点击按钮来开始语音识别、停止语音识别和播放语音。


## 作者

`web-speech-sdk` 由 `leeing` 开发和维护。


## 许可证

`web-speech-sdk` 使用 `MIT` 许可证。
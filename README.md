# askopenai

Hit OpenAI GPT3 from the commandline.

Requires either `OPENAI_API_TOKEN` or `OPENAI_API_ORGANIZATION_TOKEN` be set in your environment.

```
$ deno task run "list 3 examples using awk to truncate lines to 10 characters"
Task run deno run --allow-env=OPENAI_API_TOKEN,OPENAI_API_ORGANIZATION_TOKEN --allow-net=api.openai.com main.ts "list 3 examples using awk to truncate lines to 10 characters"
1. awk '{print substr($0, 0, 10)}' filename
2. awk '{print substr($0, 0, length - (length - 10))}' filename
3. awk '{print substr($0, 1, 10)}' filename
```

```
$ deno task compile
Task compile deno compile -o ./build/askopenai --allow-env=OPENAI_API_TOKEN,OPENAI_API_ORGANIZATION_TOKEN --allow-net=api.openai.com main.ts
Check file:///workspaces/askopenai/main.ts
Compile file:///workspaces/askopenai/main.ts
Emit ./build/askopenai
@darrend ➜ /workspaces/askopenai (main) 
$ cd build
$ ./askopenai "tell me 3 good deno learning resources with urls in markdown table format"
```

| Resource    | URL            |
| ----------- | -------------- |
|Coursera | https://www.coursera.org/learn/introduction-to-deep-learning-with-pytorch |
| Kaggle | https://www.kaggle.com/learn/deep-learning |
| Udacity | https://www.udacity.com/course/deep-learning-pytorch--ud188 |
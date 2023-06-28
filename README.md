# hai
Javascript Serverless Microframework for AWS, inspired by aws chalice.

A traditional Japanese vessel, like a cup, is called hai and written "杯".

## 🐋 local test

To run a Docker container locally, you can use the following commands

```bash
$ docker build -t hai-local
$ docker run -p 9000:8080 hai-local
```

In a separate terminal, you can then locally invoke the function using cURL

```bash
$ curl -XPOST "http://localhost:9000/2015-03-31/funct
ions/function/invocations" -d '{"payload":"hello world!"}'
```

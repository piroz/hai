# hai
Javascript Serverless Microframework for AWS, inspired by aws chalice.

A traditional Japanese vessel, like a cup, is called hai and written "杯".

## 🐋 local test

To run a Docker container locally, you can use the following commands

```bash
$ docker build -t hai-local .
$ docker run -p 9000:8080 hai-local
```

In a separate terminal, you can then locally invoke the function using cURL

```bash
$ curl -XPOST "http://localhost:9000/2015-03-31/functions/function/invocations" \
-d '{"payload":"hello world!", "requestContext":{"domainName":"localhost"}, "headers":[], "httpMethod":"GET", "path": "/n"}'
```

## Useful commands (cdk)

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template

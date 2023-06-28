FROM public.ecr.aws/lambda/nodejs:18

COPY dist/index.js ${LAMBDA_TASK_ROOT}

CMD [ "index.handler" ]

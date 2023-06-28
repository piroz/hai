FROM public.ecr.aws/lambda/nodejs:18

COPY dist/hai.js ${LAMBDA_TASK_ROOT}

USER nobody

CMD [ "hai.handler" ]

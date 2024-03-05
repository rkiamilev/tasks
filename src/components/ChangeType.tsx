import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );

    return (
        <div>
            <Button
                onClick={() => {
                    const tempType: QuestionType =
                        questionType === "multiple_choice_question"
                            ? "short_answer_question"
                            : "multiple_choice_question";
                    setQuestionType(tempType);
                }}
            >
                Change Type
            </Button>
            <p>
                {questionType === "short_answer_question"
                    ? "Short Answer"
                    : "Multiple Choice"}
            </p>
        </div>
    );
}
